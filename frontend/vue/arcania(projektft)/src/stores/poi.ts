import { defineStore } from 'pinia'
import type { Poi } from '@/types/Poi'

export const usePoiStore = defineStore('Poi', {
  state: () => ({
    Pois: [] as Poi[],
    Poi: {} as Poi,
    isLoading: false,
  }),
  actions: {
    setIsLoading(value: boolean) {
      this.isLoading = value
    },

    async getPois() {
      try {
        this.isLoading = true
        const response = await fetch('http://localhost:3000/Poi')
        const data = await response.json()
        if (data) {
          this.Pois = data
        }
      } catch (error) {
        console.error('Error getting Pois: ', error)
      } finally {
        this.isLoading = false
      }
    },

    async getPoiById(id: number) {
      try {
        const response = await fetch(`http://localhost:3000/Poi/${id}`)
        const data = await response.json()
        if (data) {
          this.Poi = data[0]
        }
      } catch (error) {
        console.error('Error getting Poi by id: ', error)
      }
    },

    async addPoi(Poi: Partial<Poi>) {
      try {
        const response = await fetch('http://localhost:3000/Poi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Poi),
        })
        const data = await response.json()
        if (data) {
          this.Pois.push(data)
        }
      } catch (error) {
        console.error('Error adding a new Poi: ', error)
      }
    },

    async editPoi(Poi: Partial<Poi>) {
      const id = this.Poi.id
      try {
        const response = await fetch(`http://localhost:3000/Poi/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Poi),
        })
        const data = await response.json()
        if (data) {
          this.Pois.push(data)
        }
      } catch (error) {
        console.error('Error editing Poi: ', error)
      }
    },

    async deletePoi(id: number) {
      try {
        const response = await fetch(`http://localhost:3000/Poi/${id}`, {
          method: 'DELETE',
        })
        await response.json()
      } catch (error) {
        console.error('Error Deleting Poi: ', error)
      }
    },
  },
})
