import CustomAxios from "./CustomAxios";

export const fetchTimeZone = () => {
  return (dispatch) => {
    CustomAxios.post("/getDateRange", {
      organization: "DemoTest",
      view: "Auction",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => [console.log(err)]);
  };
};
