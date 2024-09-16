import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import { IById, IGetListInvoicesParams, IInvoice } from "@/models/interfaces";

const REST = "invoices";
const EXPORT = "export";

export const getListInvoicesAPI = async (params: IGetListInvoicesParams): Promise<IInvoice[]> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const exportInvoiceAPI = async (path: IById) => {
    const { id } = path;
    const url = `${REST}/${id}/${EXPORT}`;
    const response = await axiosInstanceJfw.get(url, {
        responseType: "blob",
    });

    return response;
};
