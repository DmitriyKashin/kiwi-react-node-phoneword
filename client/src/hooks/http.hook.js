import { useState, useCallback } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const request = useCallback(async (url, method = 'GET', params = {}, body = null, headers = {}) => {
    setLoading(true)
    try {
      const response = await fetch(url, { method, body, headers })
      const data = await response.json()

      if (!response.ok) {
        throw new Error (data.message || 'Something is wrong')
      }
      setLoading(false)
      setError(false)
      return data
    } catch (error) {
      setLoading(false)
      setError(error.message)
      throw error
    }
  }, [])
  return { loading, request, error }

}