import './App.css'

function App() {
  let studentName: string = "Jonas C. Buenavides";
  let age: number = 67;
  let isActive: boolean = false;
  console.log("Status:", isActive)

  let status: "Active" | "Inactive";
  status = "Active";
  let gradeLevel: "Grade 7" | "Grade 8" | "Grade 9";
  gradeLevel = "Grade 9";

  function getRemarks(score: number): string {
    if (score >= 90) {
      return("Excellent")
    } else if (score >= 75) {
      return("Passed")
    } else {
      return("Failed")
    }
  }
  console.log("Remarks:", getRemarks(99))

  interface Student {
    name: string;
    age: number;
    gradeLevel: string;
    status: "Active" | "Inactive";
    score: number;
  }
  let student1: Student = {
    name: "Jonas Buenavides",
    age: 41,
    gradeLevel: "Grade 8",
    status: "Active",
    score: 67
  };
  console.log(student1)
  return (
    <> {/*Fragment*/}
    <h1 className='font-mono font-bold text-3xl bg-clip-text text-transparent bg-linear-to-b from-red-600 via-yellow-400 to-red-600'>Student Profiles</h1>
    <br />
      <div className='flex items-center flex-col'>
        <div className='flex flex-col items-start w-md'>
          <p className='font-mono text-xl'>Student Name: {studentName}</p>
          <p className='font-mono text-xl'>Age: {age}</p>
          <p className='font-mono text-xl'>Grade Level: {gradeLevel}</p>
          <p className='font-mono text-xl'>Is Active: {isActive ? "Yes" : "No"}</p>
          <p className='font-mono text-xl'>Status: {status}</p>
        </div>
        <br />
        <div className='flex flex-col items-start w-md'>
          <p className='font-mono text-xl'>Student Name: {student1.name}</p>
          <p className='font-mono text-xl'>Age: {student1.age}</p>
          <p className='font-mono text-xl'>Is Active: {student1.gradeLevel}</p>
          <p className='font-mono text-xl'>Status: {student1.status}</p>
          <p className='font-mono text-xl'>Score: {student1.score}</p>
          <p className='font-mono text-xl'>Status: {getRemarks(student1.score)}</p>
        </div>
      </div>
    </>
  )
}
export default App
