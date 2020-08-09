class SpaceAge:
    def __init__(self, seconds):
        self.age_in_earth_years = seconds / 31557600

    def on_earth(self) -> float:
        return self.age_rate(1)

    def on_mercury(self) -> float:
        return self.age_rate(0.2408467)

    def on_venus(self) -> float:
        return self.age_rate(0.61519726)

    def on_mars(self) -> float:
        return self.age_rate(1.8808158)

    def on_jupiter(self) -> float:
        return self.age_rate(11.862615)

    def on_saturn(self) -> float:
        return self.age_rate(29.447498)

    def on_uranus(self) -> float:
        return self.age_rate(84.016846)

    def on_neptune(self) -> float:
        return self.age_rate(164.79132)

    def age_rate(self, rate: float) -> float:
        return round(self.age_in_earth_years / rate, 2)
