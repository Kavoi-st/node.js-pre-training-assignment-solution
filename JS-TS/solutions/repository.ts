export class InMemoryRepository<T extends { id: number }> {
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
        const todo = this.items.find(t => t.id === id);
    const updated: T = { ...todo, ...patch } as T;
    this.items = this.items.map(item => item.id === id ? updated : item);
    return updated;
  }

  remove(id: number): void {
      const exists = this.items.some(t => t.id === id);


    this.items = this.items.filter(item => item.id !== id);
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  findAll(): T[] {
    return this.items;
  }
}
