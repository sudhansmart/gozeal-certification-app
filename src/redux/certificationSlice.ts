import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Certification {
    id: number;
    name: string;
    issuer: string;
    fileUrl: string;
  }

  export  interface CertificationState {
    list: Certification[];
  }

  const initialState: CertificationState = {
    list: [],
  };

  const certificationSlice = createSlice({
    name: "certifications",
    initialState,
    reducers: {
      addCertification: (state, action: PayloadAction<Certification>) => {
        if (state.list.length < 5) {
            state.list.push(action.payload);
          } else {
            alert("You can only add up to 5 certifications.");
          }
      },
      removeCertification: (state, action: PayloadAction<number>) => {
        state.list.splice(action.payload, 1);
      },
    },
  });

  export const { addCertification,removeCertification  } = certificationSlice.actions;
export default certificationSlice.reducer;