import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, TrendingDown } from 'lucide-react';
import { toast } from 'sonner';

interface ExpenseEntry {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
}

/**
 * Design: Modernes Finanz-Dashboard
 * - Ähnliche Struktur wie IncomeForm für Konsistenz
 * - Rot/Orange für Ausgaben-Visualisierung
 */

export default function ExpensesForm() {
  const [entries, setEntries] = useState<ExpenseEntry[]>([
    {
      id: '1',
      category: 'travel',
      description: 'Fahrtkosten zur Arbeit',
      amount: 450,
      date: '2024-01-31'
    },
    {
      id: '2',
      category: 'office',
      description: 'Büromaterial und Zubehör',
      amount: 125,
      date: '2024-01-15'
    }
  ]);

  const [formData, setFormData] = useState({
    category: 'travel',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddEntry = () => {
    if (!formData.description || !formData.amount) {
      toast.error('Bitte füllen Sie alle Felder aus');
      return;
    }

    const newEntry: ExpenseEntry = {
      id: Date.now().toString(),
      category: formData.category,
      description: formData.description,
      amount: parseFloat(formData.amount),
      date: formData.date
    };

    setEntries([...entries, newEntry]);
    setFormData({
      category: 'travel',
      description: '',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    });
    toast.success('Ausgabe hinzugefügt');
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
    toast.success('Ausgabe gelöscht');
  };

  const totalExpenses = entries.reduce((sum, entry) => sum + entry.amount, 0);

  const expenseCategories = [
    { value: 'travel', label: 'Fahrtkosten' },
    { value: 'office', label: 'Büromaterial' },
    { value: 'software', label: 'Software & Lizenzen' },
    { value: 'education', label: 'Fortbildung' },
    { value: 'phone', label: 'Telefon & Internet' },
    { value: 'other', label: 'Sonstige' }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      travel: 'bg-orange-50 text-orange-700',
      office: 'bg-amber-50 text-amber-700',
      software: 'bg-yellow-50 text-yellow-700',
      education: 'bg-lime-50 text-lime-700',
      phone: 'bg-cyan-50 text-cyan-700',
      other: 'bg-slate-50 text-slate-700'
    };
    return colors[category] || colors.other;
  };

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-orange-50 to-amber-100 border-orange-200">
        <CardHeader>
          <CardTitle className="font-display">Gesamtwerbungskosten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-display font-bold text-orange-700">
            {totalExpenses.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </div>
          <p className="text-sm text-orange-600 mt-2">
            {entries.length} Einträge erfasst
          </p>
        </CardContent>
      </Card>

      {/* Add Entry Form */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="font-display">Neue Ausgabe</CardTitle>
          <CardDescription>
            Erfassen Sie eine neue Werbungskosten
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Kategorie
              </Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger id="category" className="border-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {expenseCategories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exp-date" className="text-sm font-medium">
                Datum
              </Label>
              <Input
                id="exp-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="border-slate-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="exp-description" className="text-sm font-medium">
              Beschreibung
            </Label>
            <Input
              id="exp-description"
              placeholder="z.B. Fahrtkosten Januar"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border-slate-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exp-amount" className="text-sm font-medium">
              Betrag (€)
            </Label>
            <Input
              id="exp-amount"
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
            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Ausgabe hinzufügen
          </Button>
        </CardContent>
      </Card>

      {/* Entries List */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="font-display">Erfasste Werbungskosten</CardTitle>
          <CardDescription>
            Alle Ihre Ausgaben
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {entries.length === 0 ? (
              <p className="text-center text-slate-500 py-8">
                Noch keine Einträge. Fügen Sie oben eine neue Ausgabe hinzu.
              </p>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-orange-300 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(entry.category)}`}>
                        {expenseCategories.find(c => c.value === entry.category)?.label}
                      </span>
                    </div>
                    <div className="font-medium text-slate-900">
                      {entry.description}
                    </div>
                    <div className="text-sm text-slate-600">
                      {new Date(entry.date).toLocaleDateString('de-DE')}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-orange-600">
                        -{entry.amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
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

      {/* Tips Card */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <TrendingDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900">
              <p className="font-medium mb-2">Tipps für Werbungskosten:</p>
              <ul className="space-y-1 text-amber-800">
                <li>• Fahrtkosten: 0,30€ pro km oder tatsächliche Kosten</li>
                <li>• Homeoffice: 5€ pro Tag oder 1.260€ pro Jahr</li>
                <li>• Alle Belege aufbewahren für mindestens 6 Jahre</li>
                <li>• Fortbildungen sind vollständig absetzbar</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
