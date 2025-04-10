import TdTabelDetail from "../TdTabelDetail";

interface IPropsRender {
  data: any;
}
export const RenderDetailTabelBuying: React.FC<IPropsRender> = (props) => {
  const selectName = props.data.find((dt: any) => dt.label === "nama");
  const selectTotal = props.data.find((dt: any) => dt.label === "dolar");
  const selectNominal = props.data.find((dt: any) => dt.label === "nominal");
  const selectKurs = props.data.find((dt: any) => dt.label === "kurs");
  const selectNominalDolar = props.data.find(
    (dt: any) => dt.label === "nominalkredit"
  );
  return (
    <TdTabelDetail
      name={selectName?.value ?? ""}
      total={selectTotal?.value ?? ""}
      nominal={selectNominal?.value ?? ""}
      kurs={selectKurs?.value ?? ""}
      nominalDolar={selectNominalDolar?.value ?? ""}
    />
  );
};
