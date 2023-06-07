import FormLocalStorage from "@/components/Dashboard/Setting/formLocalStorage";
import FormPersonalization from "@/components/Dashboard/Setting/formPersonalization";

const MySetting = () => {
  return (
    <article style={{ width: "100%" }}>
      <h3>My Settings</h3>

      <FormLocalStorage />

      <FormPersonalization />
    </article>
  );
};

export default MySetting;
