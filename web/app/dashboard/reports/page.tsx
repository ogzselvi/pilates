'use client'

import { BarChart3 } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="p-4 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Raporlar</h1>
        <p className="text-gray-600">İstatistikler ve analizler</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600 mb-1">Toplam Müşteri</p>
          <p className="text-3xl font-bold text-gray-900">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600 mb-1">Aktif Seanslar</p>
          <p className="text-3xl font-bold text-primary">3</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600 mb-1">Toplam Gelir</p>
          <p className="text-3xl font-bold text-green-600">₺1,200</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600 mb-1">Bekleyen Ödeme</p>
          <p className="text-3xl font-bold text-orange-600">₺900</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center text-gray-500">
          <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium mb-2">Detaylı Raporlar Yakında</p>
          <p className="text-sm">Grafik ve analiz özellikleri ekleniyor...</p>
        </div>
      </div>
    </div>
  )
}
