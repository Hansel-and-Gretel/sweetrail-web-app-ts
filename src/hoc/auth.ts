import React, {ComponentType, useEffect} from "react";
import {useDispatch} from "react-redux";


interface Props {
    SpecificComponent: ComponentType;
    option: boolean;
    adminRoute: null | string;
}

export default function ({SpecificComponent, option, adminRoute = null}: Props) {

    const dispatch = useDispatch()

    function AuthenticationCheck() {
        // 백엔드에서 상태가져오기
        useEffect(()=>{

          // API USER AUTH 가져오기

          // 로그인이 안되어있는 경우

          //  라우팅 옵션이 없는 경우

        })
    }


}