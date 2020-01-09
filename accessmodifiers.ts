class Student{
  public studentId: number = 101;
  private studentName: string = "Latha";
  protected marks: number = 516;

  public display(): void{
    console.log("Student.display :: ");
    console.log(this.studentId);
    console.log(this.studentName);
    console.log(this.marks);
  }
}

class EngineeringStudent extends Student{
  public display(): void{
    console.log("EngineeringStudent.display :: ");
    console.log(this.studentId);
   // console.log(this.studentName); //It is private and only accessible within class 'Student'
    console.log(this.marks);
  }
}

class Test{
  sampleMethod(){
    let student = new Student();
    student.display();
    let engStudent = new EngineeringStudent();
    engStudent.display();
    console.log("Test.sampleMethod :: ");
    console.log(student.studentId);
  //  console.log(student.studentName); //It is private and only accessible within class 'Student'
  //  console.log(student.marks); //It is protected and only accessible within class 'Student' and its subclasses.
  }
}

let test:Test = new Test();
test.sampleMethod();


class X{

}
class Y{

}
/* class A extends X, Y{
  //Classes can only extend a single class
} */
interface IT1{

}
interface IT2{

}
interface IT extends IT1, IT2{

}
class ITest implements IT1, IT2{

}
