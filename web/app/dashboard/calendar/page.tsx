'use client'

import { Calendar as CalendarIcon } from 'lucide-react'

export default function CalendarPage() {
  return (
    <div className="p-4 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Takvim</h1>
        <p className="text-gray-600">Seanslarınızı görüntüleyin ve yönetin</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center text-gray-500">
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium mb-2">Takvim Yakında</p>
          <p className="text-sm">Seans takvimi özellikleri ekleniyor...</p>
        </div>
      </div>
    </div>
  )
}
