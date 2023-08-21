import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts: any = createAsyncThunk("get/fetchPosts", async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/f431f484-3817-4970-bb84-e976abd991ed"
  );
  return response.data.data;
});
