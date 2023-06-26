import * as api from '../api/AuthAPI'
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from 'react-toastify';
import { useAuth } from '../hooke/AuthContext';

const useUser = () => {
    return useQuery("users", () => api.getUser()
    )
}
const useLogin = () => {
    const { setIsAuth } = useAuth()
    return useMutation(api.login, {
        onSuccess: (user) => {
            if (user) {
                setIsAuth(true)
            }
        },
        onError: () => {
            toast.error('ログインに失敗しました。')
        }
    })
}
const useSingUp = () => {
    return useMutation(api.singUp, {
        onSuccess: (user) => {
            if (user) {
                toast.success('登録に成功しました。')
            }
        },
        onError: () => {
            toast.error('新規登録に失敗しました。')
        }
    })
}
const useLogout = () => {
    const { setIsAuth } = useAuth()
    return useMutation(api.logout, {
        onSuccess: (user) => {
            if (user) {
                setIsAuth(false)
            }
        },
        onError: () => {
            toast.error('ログアウトに失敗しました。')
        }
    })
}

export { useUser, useLogin, useLogout, useSingUp }