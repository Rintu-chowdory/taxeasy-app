import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileUp, 
  CheckCircle2, 
  AlertCircle, 
  DollarSign, 
  Home as HomeIcon, 
  Briefcase,
  Zap,
  ArrowRight,
  Upload
} from 'lucide-react';

/**
 * Design: Modernes Finanz-Dashboard mit Vertrauensästhetik
 * - Tiefes Blau (#1e40af) für Vertrauen und Sicherheit
 * - Warmes Grün für positive Validierung
 * - Bernstein für wichtige Aktionen
 * - Poppins für Überschriften, Inter für Body-Text
 * - Asymmetrisches Layout mit linker Navigation
 */

interface TaxCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  status: 'pending' | 'in-progress' | 'completed';
  documents: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [categories, setCategories] = useState<TaxCategory[]>([
    {
      id: 'income',
      title: 'Einkünfte',
      description: 'Gehalt, Lohn und andere Einkommen',
      icon: <DollarSign className="w-6 h-6" />,
      progress: 100,
      status: 'completed',
      documents: ['Lohnsteuerbescheinigung.pdf']
    },
    {
      id: 'expenses',
      title: 'Werbungskosten',
      description: 'Berufliche Ausgaben und Fahrtkosten',
      icon: <Briefcase className="w-6 h-6" />,
      progress: 60,
      status: 'in-progress',
      documents: ['Fahrtkosten.pdf', 'Büromaterial.pdf']
    },
    {
      id: 'home-office',
      title: 'Homeoffice',
      description: 'Raummiete und Nebenkosten',
      icon: <HomeIcon className="w-6 h-6" />,
      progress: 30,
      status: 'in-progress',
      documents: []
    },
    {
      id: 'special-expenses',
      title: 'Sonderausgaben',
      description: 'Versicherungen, Spenden, Altersvorsorge',
      icon: <Zap className="w-6 h-6" />,
      progress: 0,
      status: 'pending',
      documents: []
    }
  ]);

  const overallProgress = Math.round(categories.reduce((sum, cat) => sum + cat.progress, 0) / categories.length);
  const completedCount = categories.filter(cat => cat.status === 'completed').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'in-progress':
        return 'text-amber-600 bg-amber-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold text-slate-900">TaxEasy</h1>
            </div>
            <div className="text-sm text-slate-600">
              Steuererklärung 2024
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-slate-200 p-1 rounded-lg">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Übersicht
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Kategorien
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Dokumente
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Progress Card */}
            <Card className="bg-white border-slate-200 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-display">Gesamtfortschritt</CardTitle>
                    <CardDescription>
                      {completedCount} von {categories.length} Kategorien abgeschlossen
                    </CardDescription>
                  </div>
                  <div className="text-4xl font-display font-bold text-blue-600">
                    {overallProgress}%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={overallProgress} className="h-3 bg-slate-200" />
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Abgeschlossen', value: completedCount, color: 'bg-green-50 text-green-700' },
                    { label: 'In Bearbeitung', value: categories.filter(c => c.status === 'in-progress').length, color: 'bg-amber-50 text-amber-700' },
                    { label: 'Ausstehend', value: categories.filter(c => c.status === 'pending').length, color: 'bg-slate-50 text-slate-700' },
                    { label: 'Dokumente', value: categories.reduce((sum, cat) => sum + cat.documents.length, 0), color: 'bg-blue-50 text-blue-700' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${stat.color} text-center`}>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Start */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-display flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Schnelleinstieg
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Beginnen Sie mit der Erfassung Ihrer Einkünfte und laden Sie dann die erforderlichen Dokumente hoch.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Erste Kategorie öffnen <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-display">{category.title}</CardTitle>
                          <CardDescription className="text-sm">{category.description}</CardDescription>
                        </div>
                      </div>
                      {getStatusIcon(category.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">Fortschritt</span>
                        <span className="text-sm font-bold text-blue-600">{category.progress}%</span>
                      </div>
                      <Progress value={category.progress} className="h-2 bg-slate-200" />
                    </div>
                    
                    {category.documents.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">Hochgeladene Dokumente:</p>
                        <div className="space-y-1">
                          {category.documents.map((doc, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2 rounded">
                              <FileUp className="w-4 h-4 text-blue-600" />
                              {doc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setActiveTab('documents')}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Dokumente hochladen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <Card className="bg-white border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="font-display">Dokumenten-Upload</CardTitle>
                <CardDescription>
                  Laden Sie alle erforderlichen Dokumente für Ihre Steuererklärung hoch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category) => (
                  <div key={category.id} className="border-b border-slate-200 pb-6 last:border-b-0">
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                      {category.icon}
                      {category.title}
                    </h3>
                    
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer group">
                      <FileUp className="w-12 h-12 text-slate-400 mx-auto mb-3 group-hover:text-blue-600 transition-colors" />
                      <p className="text-sm font-medium text-slate-900 mb-1">
                        Dateien hier ablegen oder klicken zum Durchsuchen
                      </p>
                      <p className="text-xs text-slate-500">
                        PDF, JPG oder PNG bis 10 MB
                      </p>
                    </div>

                    {category.documents.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {category.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-green-50 border border-green-200 p-3 rounded-lg">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-medium text-slate-900">{doc}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                              Löschen
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-2">TaxEasy</h3>
              <p className="text-sm text-slate-600">
                Ihre kostenlose Steuererklärung - einfach, schnell und sicher.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Hinweise</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Datenschutz</a></li>
                <li><a href="#" className="hover:text-blue-600">Impressum</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Kontakt</h4>
              <p className="text-sm text-slate-600">
                Haben Sie Fragen? Kontaktieren Sie uns unter support@taxeasy.de
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2024 TaxEasy. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
