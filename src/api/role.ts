import { IById, IGetListRolesParams, IRole } from '../models';
import { get, patch, remove } from '../utils/axiosHelper';

const REST = 'v1/roles';
const PERMISSION = 'permissions';

export const getListRolesAPI = async (
  params?: IGetListRolesParams,
): Promise<IRole[]> => {
  const url = `${REST}`;
  const response = await get(url, { params });

  return response.data;
};

export const getRoleDetailsAPI = async (path: IById): Promise<IRole> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const assignPermissionsToRoleAPI = async (
  path: IById,
  params: string,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${PERMISSION}?${params}`;

  const response = await patch(url);

  return response.data;
};

export const deletePermissionsFromRoleAPI = async (
  path: IById,
  params: string,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${PERMISSION}?${params}`;
  const response = await remove(url);

  return response.data;
};
