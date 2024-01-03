import Student from "./Student";

function App() {
  return (
    <>
    <Student name="Mito Khoza" age={30} isStudent={true}></Student>
    <Student name="Sovie Naidu" age={42} isStudent={true}></Student>
    <Student name="Renda Nelu" age={22} isStudent={true}></Student>
    <Student name="Bob Bert" age={27} isStudent={false}></Student>
    <Student name="Yash Kana" age={22} isStudent={true}></Student>
    <Student></Student>
    </>
  ); 
}

export default App;
