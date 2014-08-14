class Fund < ActiveRecord::Base
  serialize :characteristics, Array
  serialize :deliver_method, Array
  serialize :clasification, Array
  serialize :special_filters, Array
  serialize :custom_delegation, Array

  validates :name, presence: true
  validates :description, presence: true
  validates :institution, presence: true
  validates_each :characteristics, :deliver_method, :clasification do |record, attr, value|
    record.errors.add(attr, :blank) if array_field_is_empty value
  end

  def self.search(value)
      where('name ILIKE ? OR institution ILIKE ?', "%#{value}%", "%#{value}%")
  end

  private

  def self.array_field_is_empty(value)
    value.length <= 1
  end
end
