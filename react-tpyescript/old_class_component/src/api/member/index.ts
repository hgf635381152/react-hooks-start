import { MemberEntity } from '../../model';
import { members } from './mockData';

const fetchMembers = (): Promise<MemberEntity[]> => {//约束返回值类型 Promise  
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};