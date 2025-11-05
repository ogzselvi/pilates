'use client'

import { useState, useEffect } from 'react'
import { Search, Plus, Phone, Mail } from 'lucide-react'

interface Client {
  id: string
  firstName: string
  lastName: string
  phone: string
  email?: string
  status: 'active' | 'passive'
  totalSessions: number
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Load sample data
    const sampleClients: Client[] = [
      {
        id: '1',
        firstName: 'Elif',
        lastName: 'Yılmaz',
        phone: '5551234567',
        email: 'elif.yilmaz@example.com',
        status: 'active',
        totalSessions: 24,
      },
      {
        id: '2',
        firstName: 'Ayşe',
        lastName: 'Demir',
        phone: '5552345678',
        email: 'ayse.demir@example.com',
        status: 'active',
        totalSessions: 18,
      },
    ]
    setClients(sampleClients)
  }, [])

  const filteredClients = clients.filter((client) =>
    `${client.firstName} ${client.lastName} ${client.phone} ${client.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-4 lg:p-8 pb-20 lg:pb-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Müşteriler</h1>
        <p className="text-gray-600">Tüm müşterilerinizi yönetin</p>
      </div>

      {/* Search & Add */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Müşteri ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
        <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition">
          <Plus className="w-5 h-5" />
          Yeni Müşteri
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600 mb-1">Toplam Müşteri</p>
          <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600 mb-1">Aktif Müşteri</p>
          <p className="text-2xl font-bold text-green-600">
            {clients.filter((c) => c.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600 mb-1">Pasif Müşteri</p>
          <p className="text-2xl font-bold text-gray-400">
            {clients.filter((c) => c.status === 'passive').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600 mb-1">Toplam Seans</p>
          <p className="text-2xl font-bold text-primary">
            {clients.reduce((sum, c) => sum + c.totalSessions, 0)}
          </p>
        </div>
      </div>

      {/* Clients List */}
      <div className="bg-white rounded-lg shadow">
        {filteredClients.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            {searchQuery ? 'Müşteri bulunamadı' : 'Henüz müşteri eklenmedi'}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="p-4 hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {client.firstName[0]}{client.lastName[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {client.firstName} {client.lastName}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            client.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {client.status === 'active' ? 'Aktif' : 'Pasif'}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{client.phone}</span>
                      </div>
                      {client.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{client.email}</span>
                        </div>
                      )}
                      <p className="text-primary font-medium">
                        {client.totalSessions} seans
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
