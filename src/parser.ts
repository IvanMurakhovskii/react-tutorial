export const parser = (line: string): Array<string> | null => {
    return line.match(/(\d+|sin|cos|tg|\S)/g);
}