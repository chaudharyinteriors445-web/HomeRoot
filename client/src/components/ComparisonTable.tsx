import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Thermometer, Droplets, Wheat, Heart, Clock, ChefHat, Wind } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  coldPressed: string | boolean;
  chakki: string | boolean;
  icon: React.ReactNode;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Milling Temperature',
    coldPressed: '~40°C',
    chakki: '120-150°C',
    icon: <Thermometer className="h-5 w-5" />,
  },
  {
    feature: 'Nutrient Retention',
    coldPressed: '95-98%',
    chakki: '60-70%',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    feature: 'Fiber Integrity',
    coldPressed: true,
    chakki: false,
    icon: <Wheat className="h-5 w-5" />,
  },
  {
    feature: 'Glycemic Index',
    coldPressed: 'Low (55-60)',
    chakki: 'High (70-75)',
    icon: <Droplets className="h-5 w-5" />,
  },
  {
    feature: 'Wheat-Germ Oil',
    coldPressed: true,
    chakki: false,
    icon: <Droplets className="h-5 w-5" />,
  },
  {
    feature: 'Fresh Aroma',
    coldPressed: true,
    chakki: false,
    icon: <Wind className="h-5 w-5" />,
  },
  {
    feature: 'Shelf Life',
    coldPressed: '4-6 months',
    chakki: '2-3 months',
    icon: <Clock className="h-5 w-5" />,
  },
  {
    feature: 'Roti Quality',
    coldPressed: 'Soft & Fluffy',
    chakki: 'Average',
    icon: <ChefHat className="h-5 w-5" />,
  },
];

export default function ComparisonTable() {
  const renderValue = (value: string | boolean, isPositive: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-organic-green/20 flex items-center justify-center">
            <Check className="h-4 w-4 text-organic-green" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
            <X className="h-4 w-4 text-destructive" />
          </div>
        </div>
      );
    }
    return (
      <span className={isPositive ? 'text-organic-green font-medium' : 'text-muted-foreground'}>
        {value}
      </span>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-center">
          Cold-Pressed vs Chakki Atta: Complete Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full" data-testid="table-comparison">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Feature</th>
                <th className="text-center py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Badge className="bg-organic-green text-organic-green-foreground">Cold-Pressed</Badge>
                  </div>
                </th>
                <th className="text-center py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <Badge variant="secondary">Chakki Atta</Badge>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={row.feature} 
                  className={index % 2 === 0 ? 'bg-muted/30' : ''}
                  data-testid={`row-comparison-${index}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-wheat">{row.icon}</span>
                      <span className="font-medium">{row.feature}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    {renderValue(row.coldPressed, true)}
                  </td>
                  <td className="text-center py-3 px-4">
                    {renderValue(row.chakki, false)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
