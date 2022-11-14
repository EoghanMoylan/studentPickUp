const axios = require('axios');

const baseUrl = "http://127.0.0.1:3000";
const expectedClassroomResponse = {"return_message": "success","classrooms": [{"id": "1","classroomName": "Class A","studentCount": "10"},{"id": "2","classroomName": "Class B","studentCount": "15"}]};
const expectedAllStudentResponse = [{"id":"1","firstName":"Mark","isPresent":true,"lastName":"Anthony","classroomID":"1"},{"id":"2","firstName":"Jenny","isPresent":true,"lastName":"Hawkins","classroomID":"1"},{"id":"3","firstName":"Anthony","isPresent":true,"lastName":"Maguire","classroomID":"1"},{"id":"4","firstName":"Hilary","isPresent":true,"lastName":"Gilford","classroomID":"1"},{"id":"5","firstName":"Pilar","isPresent":true,"lastName":"Sanchez","classroomID":"1"},{"id":"6","firstName":"Tobias","isPresent":true,"lastName":"Keane","classroomID":"1"},{"id":"7","firstName":"Hans","isPresent":true,"lastName":"Baumgartner","classroomID":"1"},{"id":"8","firstName":"Eva","isPresent":true,"lastName":"Black","classroomID":"1"},{"id":"9","firstName":"Julius","isPresent":true,"lastName":"O Neill","classroomID":"1"},{"id":"10","firstName":"Harold","isPresent":true,"lastName":"Menford","classroomID":"1"},{"id":"11","firstName":"Rachel","isPresent":true,"lastName":"Gillford","classroomID":"2"},{"id":"12","firstName":"Mary","isPresent":true,"lastName":"Magnussen","classroomID":"2"},{"id":"13","firstName":"Sergio","isPresent":true,"lastName":"Perez","classroomID":"2"},{"id":"14","firstName":"Zach","isPresent":true,"lastName":"De La Rocha","classroomID":"2"},{"id":"15","firstName":"Harry","isPresent":true,"lastName":"Murphy","classroomID":"2"},{"id":"16","firstName":"Tom","isPresent":true,"lastName":"Tungsten","classroomID":"2"},{"id":"17","firstName":"Barry","isPresent":true,"lastName":"Tea","classroomID":"2"},{"id":"18","firstName":"Gillian","isPresent":true,"lastName":"McÓnagh","classroomID":"2"},{"id":"19","firstName":"Garry","isPresent":true,"lastName":"Gúnna","classroomID":"2"},{"id":"20","firstName":"Jacob","isPresent":true,"lastName":"Jacobsson","classroomID":"2"},{"id":"21","firstName":"Karen","isPresent":true,"lastName":"Johaanas","classroomID":"2"},{"id":"22","firstName":"Aaron","isPresent":true,"lastName":"Lington","classroomID":"2"},{"id":"23","firstName":"Penny","isPresent":true,"lastName":"Lane","classroomID":"2"},{"id":"24","firstName":"Freddie","isPresent":true,"lastName":"O Connor","classroomID":"2"},{"id":"25","firstName":"Jimmy","isPresent":true,"lastName":"Fitzpatrick","classroomID":"2"}];
const expectedSingleStudentResponse = {"student_details":{"id":"32","studentID":"17","carReg":"19921-H-76","student":{"id":"17","firstName":"Barry","isPresent":true,"lastName":"Tea","classroomID":"2","classroom":{"id":"2","classroomName":"Class B"}}},"return_message":"success"};
const expectedDataResetResponse = {"return_message": "Data Reset"};
const expectedUpdateResponse = {"return_message":"Student Updated"};

describe('Basic REST Unit Tests', () => {

  it('Reset Endpoints ',  () => {
      axios.patch(baseUrl+"/reset/")
      .then(res => {
         expect(res.data).toEqual(expectedDataResetResponse);
      });
  });

  it('Classroom Endpoints ',  () => {
   axios.get(baseUrl+"/classrooms/")
   .then(res => {
      expect(res.data).toEqual(expectedClassroomResponse);
   });
  });

  it('Student Endpoints (getAllStudents) ',  () => {
   axios.get(baseUrl+"/students/")
   .then(res => {
      expect(res.data).toEqual(expectedAllStudentResponse);
   });
  });

  it('Student Endpoints (getOneStudent) ',  () => {
    axios.get(baseUrl+"/students/19921-H-76/")
    .then(res => {
       expect(res.data).toEqual(expectedSingleStudentResponse);
    });
  });
  it('Student Endpoints (updateStudent) ',  () => {
   let updateStudentData = {"id" : "3","isPresent" : false};
   axios.patch(baseUrl+"/students/", updateStudentData)
      .then(res => {
         expect(res.data).toEqual(expectedUpdateResponse);
      });
   });
});
