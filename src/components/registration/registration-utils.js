export const VACCINATION_SERVICES_DROPDOWN_DATA = {
  title: "Vaccination Services",
  menuOptions: [
    {
      key: "rm",
      description: "Register Members",
    },
    {
      key: "svc",
      description: "Search Vaccination Centers",
    },
    {
      key: "bvs",
      description: "Book Vaccination Slots",
    },
    {
      key: "ma",
      description: "Manage Appointment",
    },
    {
      key: "dc",
      description: "Download Certificate",
    },
  ],
};

export const PLATFORMS_DROPDOWN_DATA = {
  title: "Platforms",
  menuOptions: [
    {
      key: "coint",
      description: "CoWIN internatinal",
    },
    {
      key: "vaccinator",
      description: "Vaccinator",
    },
    {
      key: "deptLog",
      description: "Department Login",
    },
    {
      key: "vc",
      description: "Verify Certificate",
    },
    {
      key: "dc",
      description: "Vaccination Statistics",
    },
  ],
};

export const RESOURCES_DROPDOWN_DATA = {
  title: "Resources",
  menuOptions: [
    {
      key: "hgvnt",
      description: "How to get Vaccinated",
    },
    {
      key: "dnd",
      description: "Dos and Don'ts",
    },
    {
      key: "over",
      description: "Overfview",
    },
    {
      key: "apig",
      description: "API guidelines",
    },
  ],
};

export const SUPPORT_DROPDOWN_DATA = {
  title: "Support",
  menuOptions: [
    {
      key: "freq",
      description: "Frequently Asked Questions",
    },
    {
      key: "certc",
      description: "Certificate Corrections",
    },
    {
      key: "certnot",
      description: "Certificate Not Received",
    },
    {
      key: "block",
      description: "Blocked Accounts",
    },
    {
      key: "contact",
      description: "Contact Us",
    },
  ],
};

export const maskMobileNumber = (mobileNumber, isHiphenSeparated = false) => {
  if (!mobileNumber) {
    return "";
  }
  const masked = mobileNumber
    .toString()
    .split("")
    .map((e, i) => (i <= 5 ? "X" : e));
  return (
    masked.slice(0, 3).join("") +
    `${isHiphenSeparated ? "-" : " "}` +
    masked.slice(3, 6).join("") +
    `${isHiphenSeparated ? "-" : " "}` +
    masked.slice(6).join("")
  );
};
