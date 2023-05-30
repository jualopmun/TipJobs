const OPTIONS: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'short', year: 'numeric' }

export default function transformDate(date: Date): string {
    return date.toLocaleDateString('es-ES', OPTIONS);
}