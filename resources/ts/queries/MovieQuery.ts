import * as api from '../api/MovieAPI'
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from 'react-toastify';
import { AxiosError } from "axios";
const useMovies = () => {
    return useQuery("movies", () => api.getMovies()
    )
}
const useCreateMovie = () => {
    const queryClient = useQueryClient()
    return useMutation(api.createMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
            toast.success('登録に成功しました。')
        },
        onError: (error: AxiosError) => {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message)
                        })
                    }
                )
            } else {
                toast.error('登録に失敗しました。')
            }
        }
    })
}
const useUpdateMovie = () => {
    const queryClient = useQueryClient()
    return useMutation(api.updateMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
            toast.success('更新に成功しました。')
        },
        onError: (error: AxiosError) => {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message)
                        })
                    }
                )
            } else {
                toast.error('更新に失敗しました。')
            }
        }
    })
}
const useDeleteMovie = () => {
    const queryClient = useQueryClient()
    return useMutation(api.deleteMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
            toast.success('削除に成功しました。')
        },
        onError: () => {
            toast.error('削除に失敗しました。')
        }
    })
}

export { useMovies, useCreateMovie, useUpdateMovie, useDeleteMovie }