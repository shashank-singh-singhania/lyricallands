'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const schedule = [
  { day: 'Day 1', date: 'July 15', performances: [
    { time: '12:00 PM', artist: 'The Rising Stars', stage: 'Main Stage' },
    { time: '2:00 PM', artist: 'Acoustic Dreams', stage: 'Harmony Stage' },
    { time: '4:00 PM', artist: 'Electro Pulse', stage: 'Main Stage' },
  ]},
  { day: 'Day 2', date: 'July 16', performances: [
    { time: '1:00 PM', artist: 'Rhythm Rebels', stage: 'Harmony Stage' },
    { time: '3:00 PM', artist: 'Jazz Fusion Collective', stage: 'Groove Stage' },
    { time: '5:00 PM', artist: 'The Melodic Waves', stage: 'Main Stage' },
  ]},
  { day: 'Day 3', date: 'July 17', performances: [
    { time: '12:00 PM', artist: 'Acoustic Dreams', stage: 'Harmony Stage' },
    { time: '2:00 PM', artist: 'Electro Pulse', stage: 'Main Stage' },
    { time: '4:00 PM', artist: 'The Melodic Waves', stage: 'Main Stage' },
  ]},
]

export default function SchedulePage() {
  const [filter, setFilter] = useState('all')

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Schedule</h1>
      <div className="mb-8">
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'default' : 'outline'} className="mr-2">
          All Stages
        </Button>
        <Button onClick={() => setFilter('Main Stage')} variant={filter === 'Main Stage' ? 'default' : 'outline'} className="mr-2">
          Main Stage
        </Button>
        <Button onClick={() => setFilter('Harmony Stage')} variant={filter === 'Harmony Stage' ? 'default' : 'outline'} className="mr-2">
          Harmony Stage
        </Button>
        <Button onClick={() => setFilter('Groove Stage')} variant={filter === 'Groove Stage' ? 'default' : 'outline'}>
          Groove Stage
        </Button>
      </div>
      <Tabs defaultValue="day1">
        <TabsList>
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
        </TabsList>
        {schedule.map((day, index) => (
          <TabsContent key={day.day} value={`day${index + 1}`}>
            <Card>
              <CardHeader>
                <CardTitle>{day.day} - {day.date}</CardTitle>
              </CardHeader>
              <CardContent>
                {day.performances
                  .filter(performance => filter === 'all' || performance.stage === filter)
                  .map((performance, perfIndex) => (
                    <div key={perfIndex} className="mb-4 p-4 border rounded">
                      <p className="font-bold">{performance.time}</p>
                      <p>{performance.artist}</p>
                      <p className="text-sm text-muted-foreground">{performance.stage}</p>
                    </div>
                  ))
                }
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

