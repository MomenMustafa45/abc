import {
  RegisterStepOne,
  RegisterStepTwo,
} from "../ui-components/registration-steps/RegistrationSteps";

export const CHECKOUT_STEPS = [
  {
    name: "University Details",
    component: <RegisterStepOne />,
    description: "Please select your university details",
  },
  {
    name: "Account Setting",
    component: () => <RegisterStepTwo />,
    description: "Setup Your Account Setting",
  },
  {
    name: "Bussiness Info",
    component: () => <div>Account Type</div>,
    description: "Your Bussiness Related Info",
  },
  {
    name: "Billing Details",
    component: () => <div>Account Type</div>,
    description: "Setup Your Payment Method",
  },
];
