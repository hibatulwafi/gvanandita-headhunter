// Mapping currency ke locale
const currencyLocales = {
    IDR: "id-ID", // Indonesia Rupiah
    USD: "en-US", // US Dollar
    MYR: "ms-MY", // Malaysia Ringgit
    SGD: "en-SG", // Singapore Dollar
    THB: "th-TH", // Thai Baht
    VND: "vi-VN", // Vietnam Dong
    PHP: "en-PH", // Philippine Peso
    EUR: "de-DE", // Euro (contoh default)
}

export function formatCurrency(amount, currency = "USD") {
    if (!amount) return "-"
    const locale = currencyLocales[currency] || "en-US"

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}
