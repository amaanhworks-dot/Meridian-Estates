import { useState, useCallback } from 'react';
import { broker } from '@/broker.config';
import { formWhatsAppUrl } from '@/lib/contact';
import { validateForm, hasErrors, type EnquiryFormData, type FormErrors } from '@/lib/validation';
import { WhatsAppIcon, CheckIcon } from '@/components/Icons';

const PROPERTY_TYPES = [
  '3 BHK Builder Floor',
  '4 BHK Builder Floor',
  '5 BHK Builder Floor',
  'Independent House / Villa',
  'Other',
];

const BUDGET_OPTIONS = [
  '₹2–3 Cr',
  '₹3–5 Cr',
  '₹5–10 Cr',
  '₹10 Cr+',
  'Flexible',
];

const EMPTY_FORM: EnquiryFormData = {
  name: '',
  phone: '',
  propertyType: '',
  budget: '',
  locality: '',
  message: '',
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<EnquiryFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (field: keyof EnquiryFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[data-field="${firstErrorField}"]`);
      if (errorElement) {
        (errorElement as HTMLElement).focus();
      }
      return;
    }

    setSubmitState('submitting');
    setErrorMessage('');

    if (broker.contact.formEndpoint) {
      try {
        const response = await fetch(broker.contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        setSubmitState('success');
        setFormData(EMPTY_FORM);
      } catch (err) {
        setSubmitState('error');
        setErrorMessage(
          err instanceof Error
            ? `Could not submit: ${err.message}. Please try WhatsApp instead.`
            : 'Could not submit the form. Please try WhatsApp instead.'
        );
      }
    } else {
      // WhatsApp fallback
      const url = formWhatsAppUrl(formData);
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
        setSubmitState('success');
        setFormData(EMPTY_FORM);
      } else {
        setSubmitState('error');
        setErrorMessage('WhatsApp number is not configured. Please call instead.');
      }
    }
  };

  if (submitState === 'success') {
    return (
      <div className="rounded-sm border border-[#E8E3DA] bg-white p-6 sm:p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--accent-soft)' }}>
          <CheckIcon size={24} style={{ color: 'var(--accent-text-on-light)' }} />
        </div>
        <h3 className="mt-4 font-serif text-xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-[14px] text-[#6B6B6B] leading-relaxed">
          {broker.contact.formEndpoint
            ? 'We have received your details and will get back to you shortly.'
            : 'Your enquiry has been prepared in WhatsApp. Please send the message to complete your enquiry.'}
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="mt-5 inline-flex items-center justify-center rounded border border-[#1A1A1A] px-5 py-2.5 text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-sm border border-[#E8E3DA] bg-white p-6 sm:p-8">
      {!broker.contact.formEndpoint && (
        <div className="mb-5 rounded-sm border border-[#E8E3DA] bg-[#FAF8F4] px-4 py-3">
          <p className="text-[12px] text-[#6B6B6B] leading-relaxed">
            <strong className="text-[#1A1A1A]">Note:</strong> Your enquiry will be sent through WhatsApp with all details pre-filled. Please send the message in WhatsApp to complete your enquiry.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-[#1A1A1A]">
            Full Name <span aria-hidden="true" style={{ color: 'var(--accent-text-on-light)' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            data-field="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`mt-1.5 w-full rounded-sm border px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] ${
              errors.name ? 'border-red-400' : 'border-[#E8E3DA]'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-[12px] text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-[13px] font-medium text-[#1A1A1A]">
            Phone Number <span aria-hidden="true" style={{ color: 'var(--accent-text-on-light)' }}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            data-field="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="98765 43210"
            className={`mt-1.5 w-full rounded-sm border px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] ${
              errors.phone ? 'border-red-400' : 'border-[#E8E3DA]'
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            autoComplete="tel"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-[12px] text-red-500" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className="block text-[13px] font-medium text-[#1A1A1A]">
            Interested Property Type <span aria-hidden="true" style={{ color: 'var(--accent-text-on-light)' }}>*</span>
          </label>
          <select
            id="propertyType"
            data-field="propertyType"
            value={formData.propertyType}
            onChange={(e) => handleChange('propertyType', e.target.value)}
            className={`mt-1.5 w-full rounded-sm border px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] bg-white ${
              errors.propertyType ? 'border-red-400' : 'border-[#E8E3DA]'
            }`}
            aria-invalid={!!errors.propertyType}
            aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
          >
            <option value="">Select property type</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <p id="propertyType-error" className="mt-1 text-[12px] text-red-500" role="alert">
              {errors.propertyType}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-[13px] font-medium text-[#1A1A1A]">
            Budget Range <span aria-hidden="true" style={{ color: 'var(--accent-text-on-light)' }}>*</span>
          </label>
          <select
            id="budget"
            data-field="budget"
            value={formData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            className={`mt-1.5 w-full rounded-sm border px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] bg-white ${
              errors.budget ? 'border-red-400' : 'border-[#E8E3DA]'
            }`}
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p id="budget-error" className="mt-1 text-[12px] text-red-500" role="alert">
              {errors.budget}
            </p>
          )}
        </div>

        {/* Locality */}
        <div>
          <label htmlFor="locality" className="block text-[13px] font-medium text-[#1A1A1A]">
            Preferred Locality <span aria-hidden="true" style={{ color: 'var(--accent-text-on-light)' }}>*</span>
          </label>
          <input
            type="text"
            id="locality"
            data-field="locality"
            value={formData.locality}
            onChange={(e) => handleChange('locality', e.target.value)}
            placeholder="e.g. Sector 22, Rohini"
            list="locality-options"
            className={`mt-1.5 w-full rounded-sm border px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] ${
              errors.locality ? 'border-red-400' : 'border-[#E8E3DA]'
            }`}
            aria-invalid={!!errors.locality}
            aria-describedby={errors.locality ? 'locality-error' : undefined}
          />
          <datalist id="locality-options">
            {broker.profile.areasServed.map((area) => (
              <option key={area} value={area} />
            ))}
          </datalist>
          {errors.locality && (
            <p id="locality-error" className="mt-1 text-[12px] text-red-500" role="alert">
              {errors.locality}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-[13px] font-medium text-[#1A1A1A]">
            Additional Message <span className="text-[#9B9B9B]">(optional)</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={3}
            className="mt-1.5 w-full rounded-sm border border-[#E8E3DA] px-3 py-2.5 text-[14px] text-[#1A1A1A] outline-none transition-colors focus:border-[#1A1A1A] resize-none"
          />
        </div>
      </div>

      {/* Error message */}
      {submitState === 'error' && errorMessage && (
        <div className="mt-4 rounded-sm border border-red-200 bg-red-50 px-4 py-3" role="alert">
          <p className="text-[13px] text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--accent)' }}
        onMouseEnter={(e) => {
          if (submitState !== 'submitting') e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        }}
        onMouseLeave={(e) => {
          if (submitState !== 'submitting') e.currentTarget.style.backgroundColor = 'var(--accent)';
        }}
      >
        {submitState === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            <WhatsAppIcon size={18} />
            {broker.contact.formEndpoint ? 'Submit Enquiry' : 'Send via WhatsApp'}
          </>
        )}
      </button>
    </form>
  );
}
