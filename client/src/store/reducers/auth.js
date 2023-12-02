import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../../services/UserService.js";

export const logoutAsync = createAsyncThunk('auth/logoutAsync', async () => {
  // Thực hiện công việc không đồng bộ ở đây (ví dụ: gọi API)
  const response = await logout(); // Thay someAsyncAction bằng công việc thực tế bạn muốn thực hiện

  // Trả về dữ liệu nếu cần thiết
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    userInfo: {},
  },
  reducers: {
    log: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    // logout: (state) => {
    //         state.isLoggedIn = false;
    //         state.token = null;
    //         state.userInfo = {};
    //       },
  },
  extraReducers: (builder) => {
    // Xử lý kết quả khi logoutAsync hoàn thành
    builder.addCase(logoutAsync.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userInfo = {};
    });
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     token: null,
//     userInfo: {},
//   },
//   reducers: {
//     log: (state, action) => {
//       state.isLoggedIn = true;
//       state.token = action.payload.token;
//       state.userInfo = action.payload.userInfo;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.token = null;
//       state.userInfo = {};
//     },
//   },
//   extraReducers: (builder) => {
//     // Xử lý kết quả khi logoutAsync hoàn thành
//     builder.addCase(logoutAsync.fulfilled, (state) => {
//       state.isLoggedIn = false;
//       state.token = null;
//       state.userInfo = {};
//     });
// });

export const { log } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
