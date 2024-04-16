import clinicians from '../data-lists/clinicians.js';
import diagnosts from '../data-lists/diagnosts.js';
import services from '../data-lists/services.js';

const getClinicianId = (name) => clinicians[name].id;

const getDiagnostId = (name) => diagnosts[name].id;

const getServiceId = (service) => {
  const [key] = service.split('.');

  return key;
};

const getServiceType = (service) => {
  const [key, point = 1] = service.split('.');

  return services[key][point].type;
};

const getRmsCode = (service) => {
  const [key, point = 1] = service.split('.');

  return services[key][point].rms;
};

const getFdidsCode = (service) => {
  const [key, point = 1] = service.split('.');

  return services[key][point].fdids;
};

const getCode = (data, type) => {
  switch (type) {
    case 'clinician':
      return getClinicianId(data);
    case 'diagnost':
      return getDiagnostId(data);
    case 'service':
      return getServiceId(data);
    case 'type':
      return getServiceType(data);
    case 'rms':
      return getRmsCode(data);
    case 'fdids':
      return getFdidsCode(data);
    default:
      throw new Error();
  }
};

export default getCode;
