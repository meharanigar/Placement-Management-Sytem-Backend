
let students=[
    {
        id:101,
        studentName:"mehar",
        email:"mehar@gmail.com",
        phone:7095882080,
        Branch:"CAI",
        Cgpa:9
    },
    {
        id:102,
        studentName:"nigar",
        email:"nigar@gmail.com",
        phone:1234567890,
        Branch:"CAI",
        Cgpa:9

    }
]
//  export function getStudents(req,res){
//     res.status(200).json(students);
// };
export function getStudents(req,res){
    res.status(200).json(students);
};
export function getStudentsById(req,res){
    //Read if from utl
    const id = Number(req.params.id);
    //search the students
    const student = students.find(
        (student)=>student.id === id
    );

    //return student
    res.status(200).json({
        success:true,
        student
    });
}

//adding students
export function addStudent(req,res){
    //read the JSON data -- react from
    const student = req.body;

    //add into the array
    students.push(student);
    res.status(201).json({
        success:true,
        message:"student register successfully",
        student
    });
}
export function updateStudent(req,res){
    const id = Number(req.params.id);
    const updateStudent = req.body;

    let studentFound = false;
    students = students.map((student)=>{
        if(student.id===id){
            studentFound = true;
            return{
                ...student,...updateStudent
            }
        }
    
});
if(!studentFound){
    return res.status(400).json({
        success: false,
        message : "student Not Found"
    });
}
res.status(200).json({
    success : true,
    message  :" student updated successfully "
});

};
//delete the student from the array
export  function deleteStudent(req,res){
        const id = Number(req.params.id);
        const student = students.find(
            (student)=>student.id === id 
        );
         if(!studentFound){
            return res.status(200).json({
                success : false,
                message:"Student Not Found"
            });
        };
        students = students.filter(
            (student)=>student.id !== id
        );
        res.status(200).json({
            sucess : true,
            message : "student delete successfully"
        })
    }
