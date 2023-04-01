export class Shapes {
    static Triangle(shapeColor, textColor, text) {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
          <polygon points="150,20 70,180 230,180" fill="${shapeColor}"/>
          <text x="150" y="130" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    }
    static Circle(shapeColor, textColor, text) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
          <text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    }
    static Square(shapeColor, textColor, text) {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
          <rect x="70" y="20" width="160" height="160" fill="${shapeColor}"/>
          <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
}
