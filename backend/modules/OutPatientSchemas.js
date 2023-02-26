const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

// Default Templates:
// outpatient clinic service - 门诊业务


// outpatient register - 挂号明细:
const outpatientRegisterSchema = new mongoose.Schema({
    _id: false,
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
        required: true,
        unique: true
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
    _id: false,
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
        equired: true,
        unique: true
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

// outpatient order master - 处方主表：
const outpatientOrderMasterSchema = new mongoose.Schema({
    _id: false,
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
    prescription_id: { //primary key
        type: String,
        required: true,
        unique: true
        // TODO: Ref 1-N appointment_id in outpatientVisit
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
const outpatientOrderMedicalSchema = new mongoose.Schema({
    _id: false,
    institution_code: {
        type: String
    },
    data_entry_time: {
        type: Date
        // TODO: Chinese date format handle
    },
    prescription_id: {
        type: String
    },
    prescription_detail_id: { //primary key
        type: String,
        required: true,
        unique: true
    },
    suborder_id: {
        type: String
    },
    item_type_id: {
        type: String
    },
    item_type: {
        type: String
    },
    item_code: {
        type: String
    },
    item_name: {
        type: String
    },
    item_category_code: {
        type: String
    },
    item_category: {
        type: String
    },
    medicine_dose_type_code: {
        type: String
    },
    medicine_dose_type: {
        type: String
    },
    medicine_volumn: {
        type: String
    },
    medicine_intake_code: {
        type: String
    },
    medicine_intake_method: {
        type: String
    },
    frequency_code: {
        type: String
    },
    frequency_description: {
        type: String
    },
    dosage_per_use: {
        type: Number
    },
    dosage_unit: {
        type: String
    },
    intake_days: {
        type: String //example: 7天
    },
    chinese_medicine_method: {
        type: String
    },
    start_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    end_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    administer_department_code: {
        type: String
    },
    administer_department: {
        type: String
    },
    administer_personnel_code: {
        type: String
    },
    administer_personnel_name: {
        type: String
    },
    administer_timestamp: {
        type: Date
        // TODO: Chinese date format handle
    },
    medicine_ownsership_status: {
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

//outpatient order else - 其他处方明细表
const outpatientOrderElseSchema = new mongoose.Schema({
    _id: false,
    institution_code: {
        type: String
    },
    data_entry_time: {
        type: Date
    },
    prescription_id: {
        type: String
    },
    prescription_detail_id: { //primary key
        type: String,
        required: true,
        unique: true
    },
    suborder_id: {
        type: String
    },
    item_type_code: {
        type: String
    },
    item_type: {
        type: String
    },
    item_code: {
        type: String
    },
    item_name: {
        type: String
    },
    item_category_code: {
        type: String
    },
    item_category: {
        type: String
    },
    frequency: {
        type: String
    },
    collection_method: {
        type: String
    },
    collection_sample: {
        type: String
    },
    exam_location: {
        type: String
    },
    anesthesia_method: {
        type: String
    },
    start_timestamp: {
        type: Date // TODO: Chinese date format handle
    },
    end_timestamp: {
        type: Date // TODO: Chinese date format handle
    },
    administer_department_code: {
        type: String
    },
    administer_department: {
        type: String
    },
    administer_personnel_code: {
        type: String
    },
    administer_personnel_name: {
        type: String
    },
    administer_timestamp: {
        type: Date // TODO: Chinese date format handle
    },
    entry_creation_personnel: {
        type: String
    },
    entry_creation_timestamp: {
        type: Date // TODO: Chinese date format handle
    },
    entry_modify_personnel: {
        type: String
    },
    entry_modify_timestamp: {
        type: Date // TODO: Chinese date format handle
    },
    update_confirmation: {
        type: String
    },
});
const OutpatientRegister = mongoose.model('outpatient_register', outpatientRegisterSchema);
const OutpatientVisit = mongoose.model('outpatient_visit', outpatientVisitSchema);
const OutpatientOrderMaster = mongoose.model('outpatient_order_master', outpatientOrderMasterSchema);
const OutpatientOrderMedical = mongoose.model('outpatient_order_medical', outpatientOrderMedicalSchema);
const OutpatientOrderElse = mongoose.model('outpatient_order_else', outpatientOrderElseSchema);

const outpatientSchemas = {
    'outpatient_register': OutpatientRegister,
    'outpatient_visit': OutpatientVisit,
    'outpatient_order_master': OutpatientOrderMaster,
    'outpatient_order_medical': OutpatientOrderMedical,
    'outpatient_order_else': OutpatientOrderElse,

}
module.exports = outpatientSchemas;