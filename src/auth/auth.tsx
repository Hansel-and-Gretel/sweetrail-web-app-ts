import React, {ComponentType, useEffect} from "react";
// import {useDispatch} from "react-redux";
// import * as userActions from "../store/user/actions";
//
// interface DeliverProps {
//     data: any;
// }
//
// interface Props {
//     SpecificComponent: React.ComponentType<any> | React.FunctionComponentElement<any>,
//     // SpecificComponent: React.ComponentType<any>,
//     option?: boolean;
//     adminRoute?: null | string;
// }
//
// // export default function Auth ({SpecificComponent, option, adminRoute=null}: Props) {
// export default function Auth (SpecificComponent: React.FunctionComponentElement<any>) {
//
//     const dispatch = useDispatch()
//
//     function AuthenticationCheck() {
//         // 백엔드에서 상태가져오기
//         useEffect(()=>{
//           // API USER AUTH 가져오기
//           dispatch(userActions.getAuthAsync.request())
//
//         },[])
//
//         // @ts-ignore
//         return(<SpecificComponent {...children} />)
//
//     }
//
//     return AuthenticationCheck
//
//
// }