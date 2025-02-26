import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export const fetchHero = async () => (await axios.get(`${API_URL}/hero`)).data;
export const fetchFeatures = async () => (await axios.get(`${API_URL}/features`)).data;
export const fetchTestimonials = async () => (await axios.get(`${API_URL}/testimonials`)).data;
