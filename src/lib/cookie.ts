/* https://ko.javascript.info/cookie */

// getCookie(name)
// 쿠키에 접근하는 가장 짧은 방법은 정규 표현식(regular expression) 을 사용하는 것입니다.
//  아래 getCookie(name) 함수는 주어진 name의 쿠키를 반환합니다.
export function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


// setCookie(name, value, options)
// 현재 경로(path=/)를 기본으로, 주어진 name과 value를 가진 쿠키를 설정합니다(다른 기본값을 추가할 수 있습니다).
interface Props {
    name: string,
    value: string,
    options: any
}
export default function setCookie({name, value, options = {}} : Props) {

    options = {
        path: '/',
        // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// 만료 기간을 음수로 설정하면 쿠키를 삭제할 수 있습니다.
//쿠키를 갱신하거나 삭제할 때는, 쿠키를 설정할 때 지정했던 도메인이나 경로를 사용해야 합니다.
// function deleteCookie(name) {
//     setCookie(name, "", {'max-age': -1})
// }
