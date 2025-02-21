import { createSlice } from "@reduxjs/toolkit";

const tenSlice = createSlice({
    name: "tenSlice",
    initialState: {
        messages: [

        ]
    },
    reducers: {
        Ten: (s, a) => {
            s.messages = s.messages.filter(e => {
                let now = new Date().getTime();
                return (e.createAt) > (now -67000)
            });

            s.messages.push({
                etat: a.payload[0] ? a.payload[0] : true,
                createAt: new Date().getTime(),
                message: a.payload[1],
            });
        }
    }
});

export const { Ten } = tenSlice.actions
export default tenSlice.reducer