const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

// Default Templates:
// outpatient clinic service - 门诊业务


// outpatient register - 挂号明细:
const outpatientRegisterSchema = new mongoose.Schema({
    institution_code: { 
        type: String
    },
    data_entry_time: {
        type: Date
        // format: '2002-12-09'
        // TODO: Chinese date format handle
        // for example: '2012年3月21日' , ' 2003年10月1日'
    },
    patient_id: {
        type: String
    },
    register_id: {
        type: String,
        required: true
        // TODO: Ref 1-1 appointment_id in outpatientVisit
    },
    appointment_id: {
        type: String
    },
    register_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    register_confirmation: {
        type: String
    },
    register_category_code: {
        type: String
    },
    register_category: {
        type: String
    },
    register_medical_category: {
        type: String
    },
    emergencyroom_status: {
        type: String
    },
    revisit_status: {
        type: String
    },
    register_method_code: {
        type: String
    },
    register_method: {
        type: String
    },
    insurance_type_code: {
        type: String
    },
    insurance_type: {
        type: String
    },
    register_department_code: {
        type: String
    },
    register_department: {
        type: String
    },
    register_doctor_code: {
        type: String
    },
    register_doctor: {
        type: String
    },
    register_fee: {
        type: String
        // TODO: Currency
    },
    entry_creation_personnel: {
        type: String
    },
    entry_creation_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    entry_modify_personnel: {
        type: String
    },
    entry_modify_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    update_confirmation: {
        type: String
    }

});

//outpatient visit - 就诊明细:
const outpatientVisitSchema = new mongoose.Schema({
    institution_code: { 
        type: String
    },
    data_entry_time: { 
        type: Date
        // TODO: Chinese date format handle
    },
    patient_id: { 
        type: String
    },
    appointment_id: { 
        type: String,
        equired: true 
        // TODO: Ref 1-1 appointment_id in outpatientVisit
        //       Ref 1-N  prescription_id in outpatientMaster
    },
    appointment_time: { 
        type: Date
        // TODO: Chinese date format handle
    },
    patient_name: { 
        type: String
    },
    insurance_type_code: { 
        type: String
    },
    insurance_type: { 
        type: String
    },
    appointment_department_code: { 
        type: String
    },
    appointment_department: { 
        type: String
    },
    appointment_doctor_code: { 
        type: String
    },
    appointment_doctor: { 
        type: String
    },
    chief_complaint: { 
        type: String
    },
    symptom_time: { 
        type: Date
        // TODO: Chinese date format handle
    },
    systolic_pressure: { 
        type: Number
    },
    diastolic_pressure: { 
        type: Number
    },
    body_temperature: { 
        type: Number
        // body_temperature: {"$numberDouble":"36.6"}
    },
    entry_creation_personnel: { 
        type: String
    },
    entry_creation_timestamp: { 
        type: Date
        // TODO: Chinese date format handle
    },
    entry_modify_personnel: { 
        type: String
    },
    entry_modify_timestamp: { 
        type: Date
        // TODO: Chinese date format handle
    },
    update_confirmation: { 
        type: String
    }
});

// outpatient master - 处方主表：
const outpatientMasterSchema = new mongoose.Schema({
    institution_code: {
      type: String,
    },
    data_entry_time: {
      type: Date
      // TODO: Chinese date format handle
    },
    patient_id: {
      type: String
    },
    prescription_id: {
      type: String,
      required: true
      // TODO: Ref 1-N appointment_id in outpatientVisit??????
    },
    appointment_id: {
      type: String
    },
    order_id: {
      type: String
    },
    prescription_category_id: {
      type: String
    },
    prescription_category: {
      type: String
    },
    appointment_time: {
      type: Date
    },
    prescription_office_code: {
      type: String
    },
    prescription_office: {
      type: String
    },
    prescription_doctor_id: {
      type: String
    },
    prescription_doctor: {
      type: String
    },
    prescription_cost: {
      type: Number
    },
    notes: {
      type: String
    },
    entry_creation_personnel: {
      type: String
    },
    entry_creation_timestamp: {
      type: Date
      // TODO: Chinese date format handle
    },
    entry_modify_personnel: {
      type: String
    },
    entry_modify_timestamp: {
      type: Date
      // TODO: Chinese date format handle
    },
    update_confirmation: {
      type: String
    }
  });

// outpatient order medical - 药品处方明细表
const OutpatientRegister = mongoose.model('outpatient_register', outpatientRegisterSchema);
const OutpatientVisit = mongoose.model('outpatient_visit', outpatientVisitSchema);
const OutpatientMaster = mongoose.model('outpatient_master', outpatientMasterSchema);
const outpatientSchemas = {
    'outpatient_register': OutpatientRegister,
    'outpatient_visit': OutpatientVisit,
    'Ooutpatient_master': OutpatientMaster,


}
module.exports = outpatientSchemas;