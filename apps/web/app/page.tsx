import { Appbar } from "./components/Appbar";


export default function Page(): JSX.Element {
  return (
    <div className="w-full h-screen flex-col ">
    <Appbar />
    <div>body</div>
  </div>
  
  );
}
