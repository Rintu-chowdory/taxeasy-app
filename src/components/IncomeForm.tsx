import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface IncomeEntry {
  id: string;
  type: string;
  description: string;
  amount: number;
  date: string;
}

/**
 * Design: Modernes Finanz-Dashboard
 * - Klare Formularstruktur mit ausreichend Whitespace
 * - Blau für primäre Aktionen, Grün für Erfolg
 */

export default function IncomeForm() {
  const [entries, setEntries] = useState<IncomeEntry[]>([
    {
      id: '1',
      type: 'salary',
      description: 'Monatliches Gehalt',
      amount: 3500,
      date: '2024-01-31'
    }
  ]);

  const [formData, setFormData] = useState({
    type: 'salary',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddEntry = () => {
    if (!formData.description || !formData.amount) {
      toast.error('Bitte füllen Sie alle Felder aus');
      return;
    }

    const newEntry: IncomeEntry = {
      id: Date.now().toString(),
      type: formData.type,
      description: formData.description,
      amount: parseFloat(formData.amount),
      date: formData.date
    };

    setEntries([...entries, newEntry]);
    setFormData({
      type: 'salary',
      description: '',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    });
    toast.success('Eintrag hinzugefügt');
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
    toast.success('Eintrag gelöscht');
  };

  const totalIncome = entries.reduce((sum, entry) => sum + entry.amount, 0);

  const incomeTypes = [
    { value: 'salary', label: 'Gehalt/Lohn' },
    { value: 'freelance', label: 'Freiberufliche Tätigkeit' },
    { value: 'rental', label: 'Mieteinnahmen' },
    { value: 'investment', label: 'Kapitalerträge' },
    { value: 'other', label: 'Sonstige Einkünfte' }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="font-display">Gesamteinkommen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-display font-bold text-blue-700">
            {totalIncome.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </div>
          <p className="text-sm text-blue-600 mt-2">
            {entries.length} Einträge erfasst
          </p>
        </CardContent>
      </Card>

      {/* Add Entry Form */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="font-display">Neuer Eintrag</CardTitle>
          <CardDescription>
            Fügen Sie eine neue Einkommensquelle hinzu
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type" className="text-sm font-medium">
                Einkommensart
              </Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger id="type" className="border-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {incomeTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium">
                Datum
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="border-slate-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Beschreibung
            </Label>
            <Input
              id="description"
              placeholder="z.B. Januargehalt"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border-slate-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium">
              Betrag (€)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="0,00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="border-slate-300"
              step="0.01"
              min="0"
            />
          </div>

          <Button 
            onClick={handleAddEntry}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Eintrag hinzufügen
          </Button>
        </CardContent>
      </Card>

      {/* Entries List */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="font-display">Erfasste Einkommen</CardTitle>
          <CardDescription>
            Alle Ihre Einkommensquellen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {entries.length === 0 ? (
              <p className="text-center text-slate-500 py-8">
                Noch keine Einträge. Fügen Sie oben einen neuen Eintrag hinzu.
              </p>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">
                      {entry.description}
                    </div>
                    <div className="text-sm text-slate-600">
                      {incomeTypes.find(t => t.value === entry.type)?.label} • {new Date(entry.date).toLocaleDateString('de-DE')}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-blue-600">
                        {entry.amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
