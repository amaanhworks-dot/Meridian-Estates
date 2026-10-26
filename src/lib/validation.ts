export interface EnquiryFormData {
  name: string;
  phone: string;
  propertyType: string;
  budget: string;
  locality: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  propertyType?: string;
  budget?: string;
  locality?: string;
}

export function validateForm(data: EnquiryFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else {
    const cleaned = data.phone.replace(/[\s\-+()]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleaned) && !/^91[6-9]\d{9}$/.test(cleaned)) {
      errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }
  }

  if (!data.propertyType) {
    errors.propertyType = 'Please select a property type.';
  }

  if (!data.budget) {
    errors.budget = 'Please select a budget range.';
  }

  if (!data.locality.trim()) {
    errors.locality = 'Please enter your preferred locality.';
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
