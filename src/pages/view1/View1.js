import Selection from "../../components/selection/Selection";
import ViewWrapper from "../../components/ui/viewWrapper/ViewWrapper";
import merchant from "../../imgs/illustrations/wizard/type-1.svg";
import affiliate from "../../imgs/illustrations/wizard/type-2.svg";
import "./View1.css";

const View1 = () => {
  return (
    <ViewWrapper>
      <div className="view1">
        <div className="view1-heading">
          <h1>Select your stratery</h1>
        </div>

        <div className="view1-cards">
          <Selection
            heading={"Merchant"}
            text={"Some short explanation about merchant goes here."}
            img={merchant}
          />
          <Selection
            heading={"Affiliate"}
            text={"Some short explanation about affiliate goes here."}
            img={affiliate}
          />
        </div>
      </div>
    </ViewWrapper>
  );
};

export default View1;
