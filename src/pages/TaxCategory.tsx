import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import IncomeForm from '@/components/IncomeForm';
import ExpensesForm from '@/components/ExpensesForm';
import DocumentUpload from '@/components/DocumentUpload';

/**
 * Design: Modernes Finanz-Dashboard
 * - Detailseite für einzelne Steuerkategorien
 * - Kombiniert Formularerfassung und Dokumenten-Upload
 */

export default function TaxCategory() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/')}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
            <div>
              <h1 className="text-2xl font-display font-bold text-slate-900">Einkünfte</h1>
              <p className="text-sm text-slate-600">Erfassen Sie Ihre Einkommensquellen</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Info */}
        <Card className="bg-blue-50 border-blue-200 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Fortschritt dieser Kategorie</p>
                <p className="text-sm text-blue-800">Sie haben 1 Eintrag erfasst und 1 Dokument hochgeladen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white border border-slate-200 p-1 rounded-lg">
            <TabsTrigger value="form" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Daten erfassen
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Dokumente
            </TabsTrigger>
          </TabsList>

          {/* Form Tab */}
          <TabsContent value="form" className="space-y-6">
            <IncomeForm />
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <DocumentUpload category="Einkünfte" />
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="bg-amber-50 border-amber-200 mt-8">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Hilfreiche Informationen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Was gehört zu den Einkünften?</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• <strong>Gehalt/Lohn:</strong> Ihr reguläres Einkommen vom Arbeitgeber</li>
                <li>• <strong>Freiberufliche Tätigkeit:</strong> Einkommen aus selbstständiger Arbeit</li>
                <li>• <strong>Mieteinnahmen:</strong> Einkommen aus Vermietung von Immobilien</li>
                <li>• <strong>Kapitalerträge:</strong> Zinsen, Dividenden, Gewinne aus Wertpapierverkäufen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Erforderliche Dokumente</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Lohnsteuerbescheinigung (von Ihrem Arbeitgeber)</li>
                <li>• Kontoauszüge (für Kapitalerträge)</li>
                <li>• Rechnungen und Verträge (für freiberufliche Tätigkeit)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setLocation('/')}
          >
            Abbrechen
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setLocation('/')}
          >
            Speichern und fortfahren
          </Button>
        </div>
      </main>
    </div>
  );
}
