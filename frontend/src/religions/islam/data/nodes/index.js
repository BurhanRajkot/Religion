import { sunniData } from './sunni';
import { hanafiData } from './hanafi';
import { shiaData } from './shia';

const nodeRegistry = {
  sunni: sunniData,
  hanafi: hanafiData,
  shia: shiaData,
};

export function getNodeData(id) {
  return nodeRegistry[id] || null;
}

export function hasNodeData(id) {
  return id in nodeRegistry;
}
