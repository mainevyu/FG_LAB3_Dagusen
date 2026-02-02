import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import Button from "./Button";
import './App.css'

function App() {
  const handleSave = () => alert("Saved");
  const handleCancel = () => alert("Cancelled!");

return (
<>
<Header />
<Student name="Charmaine Dagusen" course="BSIT-1" />
<Student name="Jennelyn Flordeliz" course="BSIT-1" />
<Student name="Jamaica Pizan" course="BSIT-1" />
<Student name="Maica Margarette Dela Cruz" course="BSIT-1" />
<Button label = "Save" onClick={handleSave}/>
<Button label = "Cancel" onClick={handleCancel}/>
<Footer />
</>
);
}
export default App;