export const API_ENDPOINTS = {
  AUTH: {
    LOGIN_CREDENTIALS: "auth/credentials/login",
    LOGIN_GOOGLE: "auth/google/login",
    REGISTER: "auth/register",
    LOGOUT: "auth/logout",
    REFRESH_TOKEN_CREDENTIALS: "auth/credentials/refreshToken",
    REFRESH_TOKEN_GOOGLE: "auth/google/refreshToken",
  },
  PATIENT: {
    CALENDAR: "patient/calendar",
    APPOINTMENT: {
      LIST: "patient/appointments",
    },
  },
  BRANCH: {
    LIST: "branch",
  },
  TREATMENT: {
    TREATMENT: "treatments",
    LIST: {
      BY_BRANCH: "treatments/branch",
    },
  },
  DENTIST: {
    LIST: "dentists",
    CALENDAR: "dentist/calendar",
  },
  SLOT: {
    LIST: "slot",
  },
  APPOINTMENT: {
    ONE: "appointment",
  },
  USERS: {
    USERS: "Users",
    //Create
    CREATE_STAFF: "User/createstaff",
    CREATE_DENTIST: "User/createdentist",
    CREATE_MANAGER: "User/createmanager",
    //List
    LIST_DENTIST: "User/dentistlist",
    LIST_MANAGER: "User/managerlist",
    LIST_STAFF: "User/stafflist",
  },
};
