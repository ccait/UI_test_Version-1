const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

// Default Templates:
// patient info - 病人信息表 公共业务
const patientInfoSchema = new mongoose.Schema({
  _id: false,
    institution_code: { 
      type: String 
    },
    documentation_time: { 
      type: Date
      //TODO: min: '1987-09-28', max: '2002-12-09'
    },
    data_entry_time: { 
      type: Date
      // 2002-12-09
    },
    patient_id: { 
      type: String,
      required: true,
      unique: true
    },
    patient_name: { 
      type: String
    },
    sex_code: { 
      type: String
    },
    sex_description: { 
      type: String
    },
    identification_category: { 
      type: String
    },
    identification_num: { 
      type: String
    },
    date_of_birth: { 
      type: Date
    },
    patient_age: { 
      type: Number
    },
    patient_category_code: { 
      type: String
    },
    patient_category: { 
      type: String
    },
    marriage_code: { 
      type: String
    },
    marriage_status: { 
      type: String
    },
    ethnicity_code: { 
      type: String
    },
    ethnicity: { 
      type: String
    },
    nationality_code: { 
      type: String 
    },
    nationality: { 
      type: String 
    },
    profession: { 
      type: String 
    },
    contact_info: { 
      type: String 
    },
    employer_name: { 
      type: String 
    },
    current_address: { 
      type: String 
    },
    emergency_contact: { 
      type: String 
    },
    emergency_contact_relationship: { 
      type: String 
    },
    emergency_contact_address: { 
      type: String 
    },
    emergency_contact_phone: { 
      type: String 
    },
    entry_creation_personnel: { 
      type: String 
    },
    entry_creation_timestamp: { 
      type: Date 
    },
    entry_modify_personnel: { 
      type: String 
    },
    entry_modify_timestamp: { 
      type: Date 
    },
    update_confirmation: { 
      type: String 
    }
  });

const PatientInfo = mongoose.model('patientInfo', patientInfoSchema);
module.exports = PatientInfo;