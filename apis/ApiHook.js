import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../components/Constants";

export const useApiRequest = (url, fetch = false) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
//   const [token, setToken] = useState("token");

  useEffect(() => {
    if (fetch) {
        console.log('fetch');
      AsyncStorage.getItem("token").then((token) => {
        const fetchData = () => {
            axios
    
              .get(apiUrl + url, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then((response) => {
                setData(response.data);
                setIsLoaded(true);
              })
              .catch((error) => {
                setError(error);
                console.log(error);
              });
          };
          fetchData();
      });
     
    }
  }, [fetch]);

  return { error, isLoaded, data };
};

export const useApiRequestPost = (url, body, fetch = false) => {
  const [postData, setData] = useState([]);
  const [postIsLoaded, setIsLoaded] = useState(false);
  const [postError, setError] = useState(null);
  const [token, setToken] = useState("token");

  useEffect(() => {
    if (fetch) {
      console.log('fetch');
      AsyncStorage.getItem("token").then((token) => {
        const fetchData = () => {
            axios
              .post(apiUrl + url, body, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then((response) => {
                setData(response.data);
                console.log(response.data);
    
                setIsLoaded(true);
              })
              .catch((error) => {
                setError(error);
                fetch = false;
                console.log(error);
              });
          };
          fetchData();
      });
    
    }
  }, [fetch]);

  return { postError, postIsLoaded, postData };
};
