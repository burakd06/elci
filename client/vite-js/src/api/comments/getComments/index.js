/** @format */

// import axiosInstance from "../../../utils/maintenanceController/axios";
import axios from 'axios'; 

/** 
 *  //JSDOC 
 * @param {("about"|"blog"|"homepage"|"e-arsivfatura"|"e-fatura"|
 * "e-irsaliye"|"e-mustahsil"|"e-defter"|"e-imza"|"e-saklama"|
 * "e-serbestmeslekmakbuzu"|"İnsanKaynaklari"|"kep"|"contact"|"footer")} page 
 * @returns Axios Response Object 
 */

export const getPageTexts = async (page) => 
  axios.get(`https://api.elcitr.com/api/texts?page=${page}`);
